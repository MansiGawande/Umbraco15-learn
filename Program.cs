using Microsoft.EntityFrameworkCore;
using Umbraco15_learn;
using Umbraco15_learn.Data;
using Umbraco15_learn.Model;
//using Umbraco15_learn.Data;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
builder.Services.AddUmbracoDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));


builder.CreateUmbracoBuilder()
    .AddBackOffice()
    .AddWebsite()
    .AddDeliveryApi() // for add custom Db table
    .AddComposers()
    .Build();

builder.Services.AddUmbracoDbContext<ApplicationDbContext>((serviceProvider, options) =>
{
    options.UseUmbracoDatabaseProvider(serviceProvider);
});

WebApplication app = builder.Build();

// Ensure static files are served
app.UseStaticFiles();


await app.BootUmbracoAsync();


app.UseUmbraco()
    .WithMiddleware(u =>
    {
     u.UseBackOffice();
        u.UseWebsite();
    })
    .WithEndpoints(u =>
    {
        // This is where to put the custom routing
        //u.EndpointRouteBuilder.MapControllerRoute(
        //       "Shop Controller",
        //       "/shop/{action}/{id?}",
        //       new { Controller = "Shop", Action = "Index" });

        u.EndpointRouteBuilder.MapControllers();

        u.UseBackOfficeEndpoints();
        u.UseWebsiteEndpoints();
    });

await app.RunAsync();
