using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authentication;

namespace Flatties.Controllers;

public class AccountController : Controller{
    public IActionResult SignIn(){
        return View("SignIn");
    }
    public IActionResult SignOut()
    {
        return SignOut("Cookies", "AzureADOpenIDConnect");
    }
}
