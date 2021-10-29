using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FruitBasketApi.Controllers
{
    public class PreferencesController : Controller
    {
        // GET: PreferencesController
        public ActionResult Index()
        {
            return View();
        }

        // GET: PreferencesController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: PreferencesController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: PreferencesController/Create
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

        // GET: PreferencesController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: PreferencesController/Edit/5
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

        // GET: PreferencesController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: PreferencesController/Delete/5
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
