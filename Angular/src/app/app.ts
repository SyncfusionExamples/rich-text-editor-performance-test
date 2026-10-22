/**
 * Rich Text Editor Overview Sample
 */
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, EmojiPickerService, VideoService, AudioService, FormatPainterService, RichTextEditorModule, QuickToolbarService, PasteCleanupService, CountService, ToolbarSettingsModel, ImageSettingsModel, ActionBeginEventArgs, CodeBlockService, ClipBoardCleanupService, AutoFormatService } from '@syncfusion/ej2-angular-richtexteditor';
import { RichTextEditorComponent, TableService, FileManagerService, SlashMenuService, ImportExportService } from '@syncfusion/ej2-angular-richtexteditor';
import { FileManagerSettingsModel, QuickToolbarSettingsModel, SlashMenuSettingsModel, ExportPdfModel, ExportWordModel, ImportWordModel } from '@syncfusion/ej2-angular-richtexteditor';
import { createElement, addClass, removeClass, Browser, getComponent  } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-root',
    templateUrl: 'app.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['app.css'],
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService,  EmojiPickerService, VideoService, AudioService, FormatPainterService, QuickToolbarService, PasteCleanupService, CountService, SlashMenuService, CodeBlockService, ClipBoardCleanupService, AutoFormatService],
    standalone: true,
    imports: [ RichTextEditorModule]
})
export class App {

    @ViewChild('toolsRTE')
    public rteObj!: RichTextEditorComponent;    

    private hostUrl: string = 'https://services.syncfusion.com/angular/production/';

    public tools: ToolbarSettingsModel = {
        items: [
            'Undo', 'Redo', '|',
            'Bold', 'Italic', 'Underline', 'StrikeThrough', 'InlineCode', '|', 'CreateLink', 'Image', 'CreateTable', 'CodeBlock',
            'HorizontalLine', 'Blockquote', '|', 'LineHeight', 'Formats', 'Alignments', '|', 'BulletFormatList', 'NumberFormatList', 'Checklist', '|', 'Outdent', 'Indent', '|',
            'FontColor', 'BackgroundColor', 'FontName', 'FontSize', '|', 'LowerCase', 'UpperCase', '|', 'SuperScript', 'SubScript', '|',
            'EmojiPicker', 'Video', 'Audio', '|', 'FormatPainter', 'ClearFormat',
            '|', 'Print', 'FullScreen', '|', 'SourceCode']
    };

    public insertImageSettings: ImageSettingsModel = {
        saveUrl: this.hostUrl + 'api/RichTextEditor/SaveFile',
        removeUrl: this.hostUrl + 'api/RichTextEditor/DeleteFile',
        path: this.hostUrl + 'RichTextEditor/'
    }

   
}