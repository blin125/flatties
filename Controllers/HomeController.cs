using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Flatties.Models;
using Microsoft.AspNetCore.Authorization;

namespace Flatties.Controllers;

[Authorize]
public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        if (!User.Identity.IsAuthenticated){
            _logger.LogInformation("User is not authenticated."); // Testing purposes
            return RedirectToAction("SignIn", "Account");
        }
        return View();
    }
    
    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
