//custom model must implement IPublishedContent, to do this we inherit from the ContentModel class
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Models.PublishedContent;

namespace Umbraco15_learn.Model
{
    public class Product : ContentModel
    {
        public Product(IPublishedContent? content) : base(content)
        {

        }
        public string Sku { get; set; } // stock keeping unit
        public IEnumerable<string> AvailableStores { get; set; }
    }
}
