// Buat Child Element <div id='content'></div> dari <div id='main'></div>
var main = document.getElementById('main');
var createContent = document.createElement('div');
createContent.setAttribute('id', 'content');
main.appendChild(createContent);

// Buat Child Element <div class='content-post'></div> dari <div id='content'></div>
var content = document.getElementById('content');
var createContentPost = document.createElement('div');
createContentPost.setAttribute('class', 'content-post');
content.appendChild(createContentPost);

// Buat Child Element <h1>Judul Post</h1> dari <div class='content-post'></div>
var contentPost = document.getElementsByClassName('content-post');
var createHeading1 = document.createElement('h1');
var createHeadingText1 = document.createTextNode('Judul Post');
contentPost[0].appendChild(createHeading1);
createHeading1.appendChild(createHeadingText1);

// Buat Child Element <span>Published on 12 May 2016</span> dari <div class='content-post'></div>
var createSpan = document.createElement('span');
var createSpanText = document.createTextNode('Published on 12 May 2016');
contentPost[0].appendChild(createSpan);
createSpan.appendChild(createSpanText);

// Buat Child Element <p>Lorem Ipsum Dolor Sit Amet</p> dari <div class='content-post'></div>
var createParagraph = document.createElement('p');
var createParagraphText = document.createTextNode('Lorem Ipsum Dolor Sit Amet');
contentPost[0].appendChild(createParagraph);
createParagraph.appendChild(createParagraphText);

// Buat Child Element <button class="share-post-btn">Share this Post</button> dari <div class='content-post'></div>
var createButton = document.createElement('button');
createButton.setAttribute('class', 'share-post-btn');
contentPost[0].appendChild(createButton);
var createButtonText = document.createTextNode('Share this Post');
createButton.appendChild(createButtonText);




// Buat Child Element <div class='content-post'></div> dari <div id='content'></div>
createContentPost = document.createElement('div');
createContentPost.setAttribute('class', 'content-post');
content.appendChild(createContentPost);

// Buat Child Element <h1>Judul Post 2</h1> dari <div class='content-post'></div>
createHeading1 = document.createElement('h1');
createHeadingText1 = document.createTextNode('Judul Post 2');
contentPost[1].appendChild(createHeading1);
createHeading1.appendChild(createHeadingText1);

// Buat Child Element <span>Published on 13 May 2016</span> dari <div class='content-post'></div>
createSpan = document.createElement('span');
createSpanText = document.createTextNode('Published on 13 May 2016');
contentPost[1].appendChild(createSpan);
createSpan.appendChild(createSpanText);

// Buat Child Element <p>Lorem Ipsum Dolor Sit Amet</p> dari <div class='content-post'></div>
createParagraph = document.createElement('p');
createParagraphText = document.createTextNode('Lorem Ipsum Dolor Sit Amet');
contentPost[1].appendChild(createParagraph);
createParagraph.appendChild(createParagraphText);

// Buat Child Element <button class="share-post-btn">Share this Post</button> dari <div class='content-post'></div>
createButton = document.createElement('button');
createButton.setAttribute('class', 'share-post-btn');
contentPost[1].appendChild(createButton);
var createButtonText = document.createTextNode('Share this Post');
createButton.appendChild(createButtonText);

// Buat alert jika button di click
var button = document.getElementsByClassName('share-post-btn');
for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function() {
        alert('You have shared this post!');
    });
}
