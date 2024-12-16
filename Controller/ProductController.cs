using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewEngines;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Web.Common.Controllers;
using Umbraco15_learn.Model;

namespace Umbraco15_learn.Controller
{
    public class ProductController : RenderController
    {
        public ProductController(ILogger<RenderController> logger, ICompositeViewEngine compositeViewEngine, IUmbracoContextAccessor umbracoContextAccessor) : base(logger, compositeViewEngine, umbracoContextAccessor) {
        }

        public override IActionResult Index() {
            return View();
        }
       

      
        [HttpPost]
        public IActionResult CreateProduct(Product model)
        {
            if (ModelState.IsValid) {
              return RedirectToAction("Index", "Product");
            }

           
            return View("Index", model);
        }
    
}
}
