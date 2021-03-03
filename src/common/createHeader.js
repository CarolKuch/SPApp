import $ from 'jquery';

export const createHeader = (props) => {
    let header = $(`
    <div id="header-carousel" class="carousel slide carousel-fade" data-ride="carousel" data-interval="10000">
        <ol class="carousel-indicators">
            <li data-target="#header-carousel" data-slide-to="0" class="active"></li>
            <li data-target="#header-carousel" data-slide-to="1"></li>
            <li data-target="#header-carousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="${props[0]}" alt="First slide">
                <div class="carousel-caption d-none d-md-block caption1">
                    <header class="main-header">
                        <h1>SPA dla nerdów</h1>
                        <p>Jedyne, a więc najlepsze SPA wyłącznie dla programistów!</p>
                    </header>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src=${props[1]} alt="Second slide">
                <div class="carousel-caption d-none d-md-block caption2">
                    <header class="main-header">
                        <h1>SPA dla nerdów</h1>
                        <p>Jedyne, a więc najlepsze SPA wyłącznie dla programistów!</p>
                    </header>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src=${props[2]} alt="Third slide">
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