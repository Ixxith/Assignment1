using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment1.Models
{
    public class GradeCalculatorModel
    {
        [Required]
        [Range(0, 100,
        ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int assignment { get; set; }
        [Required]
        [Range(0, 100,
        ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int group { get; set; }
        [Required]
        [Range(0, 100,
        ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int quiz { get; set; }
        [Required]
        [Range(0, 100,
        ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int exam { get; set; }
        [Required]
        [Range(0, 100,
        ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int intex { get; set; }

    }
}
