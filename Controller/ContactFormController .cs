//using Microsoft.AspNetCore.Mvc;
//using Org.BouncyCastle.Asn1.X509.SigI;
//using Umbraco.Cms.Core.Cache;
//using Umbraco.Cms.Core.Logging;
//using Umbraco.Cms.Core.Routing;
//using Umbraco.Cms.Core.Services;
//using Umbraco.Cms.Core.Web;
//using Umbraco.Cms.Infrastructure.Persistence;
//using Umbraco.Cms.Web.Website.Controllers;
//using Umbraco15_learn.Model;

//namespace Umbraco15_learn.Controller
//{
//    public class ContactFormController : SurfaceController
//    {
//        private readonly IContentService _contentService;
//        private readonly ILogger<ContactFormController> _logger;

//        public ContactFormController(
//            IUmbracoContextAccessor umbracoContextAccessor,
//            IUmbracoDatabaseFactory databaseFactory,
//            ServiceContext services,
//            AppCaches appCaches,
//            IProfilingLogger profilingLogger,
//            IPublishedUrlProvider publishedUrlProvider,
//            IContentService contentService,
//            ILogger<ContactFormController> logger)
//            : base(umbracoContextAccessor, databaseFactory, services, appCaches, profilingLogger, publishedUrlProvider)
//        {
//            _contentService = contentService;
//            _logger = logger;
//        }

//        public string? Name { get; private set; }
//        public string? Email { get; private set; }
//        public string? Message { get; private set; }

//        public IActionResult Submit(ContactFormViewModel model) {
//            if (!ModelState.IsValid)
//            {
//                return CurrentUmbracoPage();
//            }
//            _logger.LogInformation("We are saying hello to {Name}", Name);
//            _logger.LogInformation("We are saying hello to {Email}", Email);
//            _logger.LogInformation("We are saying hello to {Name}", Message);


//            // Work with form data here
//            return RedirectToCurrentUmbracoPage();
//        }
//    }
//}
