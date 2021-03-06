import {ExcelComponent} from "@core/ExcelComponent";

export class Toolbar extends ExcelComponent {
    static className = 'excel__toolbar';

    toHTML() {
        return `
            <div class="button">
                <div class="material-icons">format_align_left</div>
            </div>
            <div class="button">
                <div class="material-icons">format_align_center</div>
            </div>
            <div class="button">
                <div class="material-icons">format_align_right</div>
            </div>
            <div class="button">
                <div class="material-icons">format_bold</div>
            </div>
            <div class="button">
                <div class="material-icons">format_italic</div>
            </div>
            <div class="button">
                <div class="material-icons">format_underlined</div>
            </div>
        `;
    }
}