using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FruitBasketApi.Controllers
{
    public class ProfilesController : Controller
    {
        // GET: ProfilesController
        public ActionResult Index()
        {
            return View();
        }

        // GET: ProfilesController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: ProfilesController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ProfilesController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ProfilesController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: ProfilesController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ProfilesController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: ProfilesController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
