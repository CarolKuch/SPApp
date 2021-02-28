import $ from 'jquery';

export const createHeader = () => {
    const header = $(`
        <header class="main-header">
            <h1>SPA dla nerdów</h1>
        </header>
    `);
    return header;
}