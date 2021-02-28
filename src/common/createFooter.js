import $ from 'jquery';

export const createFooter= () => {
    const footer = $(`
        <footer>
        <p>Copyright &copy SPA dla Nerdów</p>
        </footer>
    `);
    return footer;
}