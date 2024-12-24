using Microsoft.AspNetCore.Mvc.Filters;
using Umbraco.Cms.Core.Models.PublishedContent;

namespace Umbraco15_learn.Interface
{
    public interface IVirtualPageController
    {
        IPublishedContent FindContent(ActionExecutingContext actionExecutingContext);
    }
}
