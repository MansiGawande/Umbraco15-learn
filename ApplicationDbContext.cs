using Microsoft.EntityFrameworkCore;
using Umbraco.Cms.Web.Common.PublishedModels;

namespace Umbraco15_learn
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Createprofile> FormSubmissions { get; set; }
    }
}
