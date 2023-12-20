import React from 'react';

const Modal = ({watchMovie}) => {
    const {movie, movieName} = watchMovie;
    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div>
                    <iframe width="100%" height="350" src={movie} title={movieName} frameborder="0" allow="accelerometer; autoplay" allowfullscreen></iframe>
                </div>
            </div>
        </dialog>
    );
};

export default Modal;