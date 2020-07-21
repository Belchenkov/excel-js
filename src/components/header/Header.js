import { ExcelComponent } from "@core/ExcelComponent";

export class Header extends ExcelComponent {
    static className = 'excel__header';

    toHTML() {
        return `
            <input type="text" value="Новая таблица" class="input" />
            <div>
                <div class="button">
                    <div class="material-icons">delete</div>
                </div>
                <div class="button">
                    <div class="material-icons">exit_to_app</div>
                </div>
            </div>
        `;
    }
}