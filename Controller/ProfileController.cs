using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Web.Website.Controllers;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Core.Cache;
using Umbraco.Cms.Core.Logging;
using Umbraco.Cms.Core.Routing;
using Umbraco.Cms.Infrastructure.Persistence;
using Umbraco.Cms.Web.Common.PublishedModels;

namespace Umbraco15_learn.Controller
{
    [ApiController]
    [Route("/umbraco/api/profile")]
    public class ProfileController : SurfaceController
    {
        private readonly ILogger<ProfileController> _logger;
        public ProfileController(IUmbracoContextAccessor umbracoContextAccessor, IUmbracoDatabaseFactory databaseFactory, ServiceContext services,
                                 AppCaches appCaches, IProfilingLogger profilingLogger, IPublishedUrlProvider publishedUrlProvider, ILogger<ProfileController> logger)
            : base(umbracoContextAccessor, databaseFactory, services, appCaches, profilingLogger, publishedUrlProvider) {
            _logger = logger;
        }

        [HttpPost("createprofile")]
        public IActionResult CreateProfile(Createprofile model) {

            if (ModelState.IsValid)
            {
                return Ok(new { success = true, message = "Profile created successfully!" });

            }
            return BadRequest(new { success = false, message = "Invalid data" });

           
            }

        }
}