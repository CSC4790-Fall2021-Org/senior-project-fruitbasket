using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FruitBasketApi.Controllers
{
    public class VideosController : Controller
    {
        // GET: VideosController
        public ActionResult Index()
        {
            return View();
        }

        // GET: VideosController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: VideosController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: VideosController/Create
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

        // GET: VideosController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: VideosController/Edit/5
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

        // GET: VideosController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: VideosController/Delete/5
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
