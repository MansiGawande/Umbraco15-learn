namespace Umbraco15_learn.Model
{

    public class Profile {
        public int Id { get; set; }
        public string? Username { get; set; }
        public string? MobileNumber { get; set; }
        public string? City { get; set; }
        public string? Email { get; set; }
        public DateOnly DateOfBirth { get; set; }
    }
}
