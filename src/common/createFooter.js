import $ from 'jquery';

export const createFooter= () => {
    const footer = $(`
        <footer class="text-center align-self-end">
        <p>Copyright &copy SPA dla Nerdów</p>
        </footer>
    `);
    return footer;
}