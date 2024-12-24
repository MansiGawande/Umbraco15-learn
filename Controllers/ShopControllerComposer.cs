
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Filters;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Web.Common.ApplicationBuilder;

namespace Umbraco15_learn.Controllers
{
    public class ShopControllerComposer : IComposer
    {
        public void Compose(IUmbracoBuilder builder)
        {
            builder.Services.Configure<UmbracoPipelineOptions>(options =>
            {
                options.AddFilter(new UmbracoPipelineFilter(nameof(ShopController))
                {
                    Endpoints = app => app.UseEndpoints(endpoints =>
                    {
                        endpoints.MapControllerRoute(
                                name: "ShopController",
                                pattern: "/shop/{action}/{id?}",
                                defaults: new { Controller = "Shop", Action = "Index" })
                            .ForUmbracoPage(FindContent); // Register FindContent method

                    })
                });
            });

        }

        private IPublishedContent FindContent(ActionExecutingContext actionExecutingContext)
        {
            // Resolve services from the container
            var umbracoContextAccessor = actionExecutingContext.HttpContext.RequestServices
                .GetRequiredService<IUmbracoContextAccessor>();

            var publishedValueFallback = actionExecutingContext.HttpContext.RequestServices
                .GetRequiredService<IPublishedValueFallback>();

            var umbracoContext = umbracoContextAccessor.GetRequiredUmbracoContext();
            var productRoot = umbracoContext.Content.GetById(2074);

            if (actionExecutingContext.ActionDescriptor is ControllerActionDescriptor controllerActionDescriptor)
            {
                //check which action is executing
                switch (controllerActionDescriptor.ActionName)
                {
                    case nameof(ShopController.Index): return productRoot;

                    // Get the SKU/Id from the route values
                    case nameof(ShopController.Product):
                        //if (actionExecutingContext.ActionArguments.TryGetValue("id", out var sku))
                        //{
                        //    return productRoot.Children().FirstOrDefault(c => c.Value<string>(publishedValueFallback, "sku") == sku.ToString());
                        //}
                        //else
                        //{
                        //    return productRoot;
                        //}
                        if (actionExecutingContext.ActionArguments.TryGetValue("id", out var sku))
                        {
                            // Find child content that matches SKU
                            var productContent = productRoot.Children()
                                .FirstOrDefault(c => c.Value<string>(publishedValueFallback, "sku") == sku.ToString());

                            return productContent ?? productRoot;  
                        }
                        else
                        {
                            return productRoot;
                        }

                    default:
                        return productRoot;

                }
            }
            return productRoot;
        }
    }
}
