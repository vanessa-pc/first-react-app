import MainContent from "./MainContent"

function TableOfContents(): JSX.Element{
    return (
        <nav aria-label="Table of contents">
            <ol>
                <li>
                    <a href="#kyoto">Kyoto</a>
                </li>
                <li>
                    <a href="#seljalandsfoss">Seljalandsfoss</a>
                </li>
                <li>
                    <a href="#venice-beach">Venice Beach</a>
                </li>
                <li>
                    <a href="#santorini">Santorini</a>
                </li>
            </ol>
        </nav>
    )
}


export default TableOfContents