using Microsoft.EntityFrameworkCore;
using Umbraco15_learn.Model; 

namespace Umbraco15_learn.Data
{
    public class ApplicationDbContext : DbContext
    {
       
        public DbSet<Product> Products { get; set; }
        public DbSet<Profile> Profiles { get; set; }
        public required DbSet<BlogComment> BlogComments { get; set; }


        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)  
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder) =>
      modelBuilder.Entity<BlogComment>(entity =>
      {
          entity.ToTable("blogComment");
          entity.HasKey(e => e.Id);
          entity.Property(e => e.Id).HasColumnName("id");
          entity.Property(e => e.BlogPostUmbracoKey).HasColumnName("blogPostUmbracoKey");
          entity.Property(e => e.Message).HasColumnName("message");
          entity.Property(e => e.Website).HasColumnName("website");
          entity.Property(e => e.Email).HasColumnName("email");
      });

        public Product GetBySku(string sku)
        {
            return Products.FirstOrDefault(p => p.Sku == sku);
        }
    }
}
