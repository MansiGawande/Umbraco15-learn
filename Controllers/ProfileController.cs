//using Microsoft.AspNetCore.Mvc;
//using Umbraco.Cms.Web.Website.Controllers;
//using Umbraco.Cms.Core.Services;
//using Umbraco.Cms.Core.Web;
//using Umbraco.Cms.Core.Cache;
//using Umbraco.Cms.Core.Logging;
//using Umbraco.Cms.Core.Routing;
//using Umbraco.Cms.Infrastructure.Persistence;
//using Umbraco.Cms.Web.Common.PublishedModels;
//using Umbraco15_learn.Model;
//using Umbraco15_learn.Data;

//namespace Umbraco15_learn.Controllers
//{

//    public class ProfileController : Controller
//    {
//        private readonly ApplicationDbContext _db;
//        public ProfileController(ApplicationDbContext db)
//        {
//            _db = db;
//        }
//        [HttpPost]
//        public IActionResult CreateProfile(Profile model)
//        {
//            if (!ModelState.IsValid)
//            {
//                return View("CreateProfile", model);
//            }

//            // Save data to your custom database table 
//            var profile = new Profile
//            {
//                Username = model.Username,
//                MobileNumber = model.MobileNumber,
//                City = model.City,
//                Email = model.Email,
//                DateOfBirth = model.DateOfBirth
//            };

//            _db.Profiles.Add(profile);
//            _db.SaveChanges();

//            TempData["Success"] = "Profile created successfully!";
//            return RedirectToAction("CreateProfile");

//        }
//    }
//}