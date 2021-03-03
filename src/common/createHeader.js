import $ from 'jquery';

export const createHeader = () => {
    const header = $(`
    <div id="header-carousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#header-carousel" data-slide-to="0" class="active"></li>
            <li data-target="#header-carousel" data-slide-to="1"></li>
            <li data-target="#header-carousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="https://images.unsplash.com/photo-1565297032488-90722f09db62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="First slide">
                <div class="carousel-caption d-none d-md-block caption1">
                    <header class="main-header">
                        <h1>SPA dla nerdów</h1>
                        <p>Jedyne, a więc najlepsze SPA wyłącznie dla programistów!</p>
                    </header>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?cs=srgb&dl=pexels-quark-studio-2506988.jpg&fm=jpg" alt="Second slide">
                <div class="carousel-caption d-none d-md-block caption2">
                    <header class="main-header">
                        <h1>SPA dla nerdów</h1>
                        <p>Jedyne, a więc najlepsze SPA wyłącznie dla programistów!</p>
                    </header>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2017/02/27/15/12/rice-2103481_1280.jpg" alt="Third slide">
                <div class="carousel-caption d-none d-md-block caption3">
                    <header class="main-header">
                        <h1>SPA dla nerdów</h1>
                        <p>Jedyne, a więc najlepsze SPA wyłącznie dla programistów!</p>
                    </header>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#header-carousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#header-carousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
  </div>
    `);
    return header;
}