let content = {
  sections: [
    { name: "Home", link: "#", authenticated: false},
    { name: "About", link: "#about", authenticated: false },
    { name: "Docs", link: "#portfolio", authenticated: false },
    { name: "Login", link: "#login", authenticated: false },
    { name: "Logout", link: "#logout", authenticated: true },
    { name: "Register", link: "#register", authenticated: false },
    { name: "My Submissions", link: "#submitData", authenticated: true },
    { name: "Review Submissions", link: "#reviewData", authenticated: false },
  ]
}

export default content;