﻿namespace Umbraco15_learn.Model
{
    public class BlogComment {
        public int Id { get; set; }

        public Guid BlogPostUmbracoKey { get; set; }

        public required string Name { get; set; }

        public required string Email { get; set; }

        public required string Website { get; set; }

        public string Message { get; set; } = string.Empty;
    }
}
