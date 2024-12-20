using Umbraco.Cms.Core.Models;

namespace Umbraco15_learn
{
    public interface IUrlSegmentProviderMenu {
        string GetUrlSegment(IContentBase content, string? culture = null);

    }
}
