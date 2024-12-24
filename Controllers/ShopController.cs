using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.ViewEngines;
using Microsoft.EntityFrameworkCore;
using Umbraco.Cms.Core.Models.Membership;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Web.Common.Controllers;
using Umbraco15_learn.Data;
using Umbraco15_learn.Model;

namespace Umbraco15_learn.Controllers
{
    [Route("shop")]
    public class ShopController : UmbracoPageController
    {
        private readonly ApplicationDbContext _db;
        
        public ShopController(ApplicationDbContext db ,ILogger<UmbracoPageController> logger, ICompositeViewEngine compositeViewEngine
         ) : base(logger, compositeViewEngine)
        {
            _db = db;
        }

        [HttpGet("index")]
        public IActionResult Index()
        {
            return View(CurrentPage); //we return the view with the content found by the FindContent method. 
        }


        [HttpGet("product/{id}")]
        public IActionResult Product(string id) {
            //var dbProduct = _db.GetBySku(id);

            var dbProduct = _db.Products.FirstOrDefault(p => p.Sku == id);

            var shopModel = new Product(CurrentPage)
            {
                Sku = id,
                //AvailableStores = dbProduct.AvailableStores act
                AvailableStores = new List<string> { "Store A", "Store B", "Store C" }
            };
            return View(shopModel);

        }
    }
}


//ILogger<UmbracoPageController> is used for logging.
//ICompositeViewEngine is used for rendering views in Umbraco.

//we need now is to implement FindContent method so we can find content for our actions and serve it to them. First we
//need to be able to get our content, and properties, so we need to inject IUmbracoContextAccessor and IPublishedValueFallback

//use attribute routing you must use an IVirtualPageController