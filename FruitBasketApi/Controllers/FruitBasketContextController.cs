using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FruitBasketApi.Controllers
{
    public class FruitBasketContextController : Controller
    {
        // GET: FruitBasketContextController
        public ActionResult Index()
        {
            return View();
        }

        // GET: FruitBasketContextController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: FruitBasketContextController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: FruitBasketContextController/Create
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

        // GET: FruitBasketContextController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: FruitBasketContextController/Edit/5
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

        // GET: FruitBasketContextController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: FruitBasketContextController/Delete/5
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
