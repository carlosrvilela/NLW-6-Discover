export default function Modal(){

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')
    
    cancelButton.addEventListener("click", close)

    function open(){
        // add active to modal
        modalWrapper.classList.add("active")
    }
    function close(){
        // remove active to modal
        modalWrapper.classList.remove("active")
        // document.location.reload()

    }

    return{
        open, close
    }
}