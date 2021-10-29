﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FruitBasketApi.Models;

namespace FruitBasketApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly FruitBasketContext _context;

        public UsersController(FruitBasketContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserDTO>>> GetUsers()
        {
            var users = _context
                .Users
                .Select(user => new UserDTO
                {
                    Users_ID = user.Users_ID,
                    UserName = user.UserName,
                    First_Name = user.First_Name,
                    Last_Name = user.Last_Name,
                    Bio = user.Bio,
                    User_Password = user.User_Password,
                    User_Email = user.User_Email,
                    Phone_Number = user.Phone_Number,
                    Date_Of_Birth = user.Date_Of_Birth,
                    Number_Of_Matches = user.Number_Of_Matches,
                    Number_Of_Baskets = user.Number_Of_Baskets,
                    City = user.City,
                    Age = user.Age,
                    Preference_ID = user.Preference_ID
                }).ToList();
            return users;
        }

            /*
        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Users>> GetUsers(long id)
        {
            var users = await _context.Users.FindAsync(id);

            if (users == null)
            {
                return NotFound();
            }

            return users;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsers(long id, Users users)
        {
            if (id != users.Id)
            {
                return BadRequest();
            }

            _context.Entry(users).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsersExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Users>> PostUsers(Users users)
        {
            _context.Users.Add(users);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUsers), new { id = users.Id }, users);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUsers(long id)
        {
            var users = await _context.Users.FindAsync(id);
            if (users == null)
            {
                return NotFound();
            }

            _context.Users.Remove(users);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UsersExists(long id)
        {
            //return _context.Users.Any(e => e.Id == id);
        }

        private static UserDTO UserToDTO(Users user) =>
            new UserDTO
            {
                User_Id = user.User_Id,
                UserName = user.UserName,
                First_Name = user.First_Name,
                Last_Name = user.Last_Name,
                Bio = user.Bio,
                Number_Of_Matches = user.Number_Of_Matches,
                City = user.City,
                Age = user.Age,
                Interest_In_Basket = user.Interest_In_Basket
            };
            */
    }
            
}
