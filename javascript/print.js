function printBlog() {
    var blogContent = document.getElementsByClassName('blogContent');
    if (blogContent.length > 0) {
      var contentToPrint = '';
      for (var i = 0; i < blogContent.length; i++) {
        contentToPrint += blogContent[i].innerHTML;
      }
      var originalContent = document.body.innerHTML;
      document.body.innerHTML = contentToPrint;
      window.print();
      document.body.innerHTML = originalContent;
    } else {
      console.error('No elements found with the class "blog"');
    }
  }