function handleFileSelect(evt) {
    var original = document.getElementById("original");
       var stego = document.getElementById("stego");
       var  img = document.getElementById("img");
       var cover = document.getElementById("cover");
       
        var message = document.getElementById("message");    
        if(!original || !stego) return;

        var files = evt.target.files;

        for (var i = 0, f; f = files[i]; i++) {
            if (!f.type.match('image.*')) {
                continue;
            }
            var reader = new FileReader();

            reader.onload = (function(theFile) {
                return function(e) {
                    img.src = e.target.result;
                    img.title = escape(theFile.name);
                    stego.className = "half invisible";
                    cover.src = "";
                    message.innerHTML="";
                    message.parentNode.className="invisible";
                    updateCapacity();
                };
            })(f);

            reader.readAsDataURL(f);
        }
            }
            function copyText(){
                let cpText = document.getElementById("message");
                let text = cpText.innerText;
                console.log(text);
                let textArea = document.createElement('textarea');
                textArea.width = "1px";
                textArea.height = "1px";
                textArea.background = "transparents";
                textArea.value = text;
                document.body.append(textArea);
                textArea.select();
                document.showUI('copy');
                document.body.removeChild(textArea);
                let btnText = document.getElementById("copy");
                btnText.innerText = "Copied!";
            }
            
           
function hide() {
    var stego = document.getElementById("stego"),
        img = document.getElementById("img"),
        cover = document.getElementById("cover"),
        message = document.getElementById("message"),
        textarea = document.getElementById("text"),
        download = document.getElementById("download");
       
    if(img && textarea) {
        cover.src = steg.encode(textarea.value, img);
        stego.className = "half";
        message.innerHTML="";
        message.parentNode.className="invisible";
        download.href=cover.src.replace("image/png", "image/octet-stream");
    }
}


function read() {
    var img = document.getElementById("img"),
        cover = document.getElementById("cover"),
        message = document.getElementById("message"),
        textarea = document.getElementById("text");
    if(img && textarea) {
        message.innerHTML = steg.decode(img);
        if(message.innerHTML !== "") {
            message.parentNode.className="";
            textarea.value = message.innerHTML;
            updateCapacity();
        }
    }
}
function updateCapacity() {
    var img = document.getElementById('img'),
        textarea = document.getElementById('text');
    if(img && text)
        document.getElementById('capacity').innerHTML='('+textarea.value.length + '/' + steg.getHidingCapacity(img) +' chars)';
}
window.onload = function(){
    document.getElementById('imageLoader').addEventListener('change', handleFileSelect, false);
    
    document.getElementById('hide').addEventListener('click', hide, false);
    document.getElementById('read').addEventListener('click', read, false);
    document.getElementById('text').addEventListener('keyup', updateCapacity, false);
    hide();
    updateCapacity();
};






























// var imageLoader = document.getElementById('imageLoader');
//     imageLoader.addEventListener('change', handleImage, false);
// var canvas = document.getElementById('imageCanvas');
// var ctx = canvas.getContext('2d');
// var messageInput = document.getElementById('message');

// var textCanvas = document.getElementById('textCanvas');
// var tctx = textCanvas.getContext('2d');

// //handle decoding
// var decodeCanvas = document.getElementById('imageCanvas2');
// var dctx = decodeCanvas.getContext('2d');
// var imageLoader2 = document.getElementById('imageLoader2');
//     imageLoader2.addEventListener('change', handleImage2, false);
    
//     let hide = getElementById('hide')

// function encrypt(){
//     function handleImage(e){
//     var reader = new FileReader();
//     reader.onload = function(event){
//         var img = new Image();
//         img.onload = function(){
//             canvas.width = img.width;
//             canvas.height = img.height;
//             textCanvas.width=img.width;
//             textCanvas.height=img.height;
//             tctx.font = "30px Arial";
//       var messageText = (messageInput.value.length) ? messageInput.value : 'Hello';
//             tctx.fillText(messageText,10,50);
//             ctx.drawImage(img,0,0);
//             var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//             var textData = tctx.getImageData(0, 0, canvas.width, canvas.height);
//             var pixelsInMsg = 0;
//                 pixelsOutMsg = 0;
//             for (var i = 0; i < textData.data.length; i += 4) {
//                 if (textData.data[i+3] !== 0) {
//                     if (imgData.data[i+1]%10 == 7) {
//                         //do nothing, we're good
//                     }
//                     else if (imgData.data[i+1] > 247) {
//                         imgData.data[i+1] = 247;
//                     }
//                     else {
//                         while (imgData.data[i+1] % 10 != 7) {
//                             imgData.data[i+1]++;
//                         }
//                     }
//                     pixelsInMsg++;
//                 }
//                 else {
//                     if (imgData.data[i+1]%10 == 7) {
//                         imgData.data[i+1]--;
//                     }
//                     pixelsOutMsg++;
//                 }
//             }
//             console.log('pixels within message borders: '+pixelsInMsg);
//             console.log('pixels outside of message borders: '+pixelsOutMsg);
//             ctx.putImageData(imgData, 0, 0);
//         };
//         img.src = event.target.result;
//     };
//     reader.readAsDataURL(e.target.files[0]);
// }
// }
// hide.addEventListener('click',encrypt)

// function handleImage2(e){
//     console.log('handle image 2');
//     var reader2 = new FileReader();
//     reader2.onload = function(event){
//         console.log('reader2 loaded');
//         var img2 = new Image();
//         img2.onload = function(){
//             console.log('img2 loaded');
//             decodeCanvas.width = img2.width;
//             decodeCanvas.height = img2.height;
//             dctx.drawImage(img2,0,0);
//             var decodeData = dctx.getImageData(0, 0, decodeCanvas.width, decodeCanvas.height);
//             for (var i = 0; i < decodeData.data.length; i += 4) {
//                 if (decodeData.data[i+1] % 10 == 7) {
//                     decodeData.data[i] = 0;
//                     decodeData.data[i+1] = 0;
//                     decodeData.data[i+2] = 0;
//                     decodeData.data[i+3] = 255;
//                 }
//                 else {
//                     decodeData.data[i+3] = 0;
//                 }
//             }




//             dctx.putImageData(decodeData, 0, 0);
//         };
//         img2.src = event.target.result;
//     };
//     reader2.readAsDataURL(e.target.files[0])
