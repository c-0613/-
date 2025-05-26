// JavaScript Document
let currentIndex = 1;

function changeContent(newIndex) {
  console.log(`Clicked thumbnail for content-${newIndex}`);
  if (newIndex === currentIndex) return;

  const currentContent = document.getElementById(`content-${currentIndex}`);
  const newContent = document.getElementById(`content-${newIndex}`);

  const direction = newIndex > currentIndex ? 'custom-exit-left' : 'custom-exit-right';

  currentContent.classList.remove('ccc-active');
  currentContent.classList.add(direction);

  setTimeout(() => {
    currentContent.classList.remove(direction);
  }, 500);

  newContent.classList.add('ccc-active');
  currentIndex = newIndex;
}



//////////////////////////////////////////手機板

function openWindow(){
	window.open('index.html','blank',
			   'top=100,left=200,width=400,height=550');
}






/////////////////////////////////////////////留言區

$(() => {
    const $messageBoard = $('#message-board');

    $messageBoard.find('#message-submit-btn').click(() => {
        const $messageName = $messageBoard.find('#message-name'); 
        const $messageEmail = $messageBoard.find('#message-email'); 
        const $messageComment = $messageBoard.find('#message-comment'); 

        if ($messageName.val() !== '' && $messageEmail.val() !== '' && $messageComment.val() !== '') {
            renderComment($messageName.val(), $messageEmail.val(), $messageComment.val());
        } else {
            alert('請填寫完整');
        }
        
        $messageName.val('');
        $messageEmail.val('');
        $messageComment.val('');
    });

    const scrollToBottom = ($e) => {
        $e.animate({
            scrollTop: $e[0].scrollHeight
        }, 200);
    };

    const renderComment = (name, email, comment) => {
        const content = `
            <span class="small text-gold">
                <i class="fas fa-user small"></i>
                <span class="small font-weight-bold">${name} (${email})：</span><br>
                ${comment}<br>
            </span>
        `;

        $messageBoard.find('.show-comment-block').append(content); 
        scrollToBottom($messageBoard.find('.show-comment-block')); 
    };
});
