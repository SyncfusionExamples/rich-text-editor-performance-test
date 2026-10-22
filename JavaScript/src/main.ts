/**
 * Rich Text Editor overview sample
 */
import { addClass, removeClass, Browser, getComponent } from '@syncfusion/ej2-base';
import { RichTextEditor, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar, Table, FileManager, EmojiPicker, Audio, Video, FormatPainter, PasteCleanup, SlashMenu, ImportExport, CodeBlock, ClipBoardCleanup, AutoFormat } from '@syncfusion/ej2-richtexteditor';
import { createElement } from '@syncfusion/ej2-base';


RichTextEditor.Inject(Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar, Table, FileManager, EmojiPicker, Audio, Video, FormatPainter, PasteCleanup, SlashMenu, ImportExport, CodeBlock, ClipBoardCleanup, AutoFormat);


    

    const hostUrl: string = 'https://ej2services.syncfusion.com/js/release/';

    const editor: RichTextEditor = new RichTextEditor({
        toolbarSettings: {
            items: ['Undo', 'Redo', '|',
                'Bold', 'Italic', 'Underline', 'StrikeThrough', 'InlineCode', '|', 'CreateLink', 'Image', 'CreateTable', 'CodeBlock',
                'HorizontalLine', 'Blockquote','|', 'LineHeight', 'Formats', 'Alignments', '|', 'BulletFormatList', 'NumberFormatList', 'Checklist' , '|', 'Outdent', 'Indent', '|',
                'FontColor', 'BackgroundColor', 'FontName', 'FontSize', '|', 'LowerCase', 'UpperCase', '|', 'SuperScript', 'SubScript', '|',
                'EmojiPicker', 'Video', 'Audio', '|', 'FormatPainter', 'ClearFormat',
                '|', 'Print', 'FullScreen', '|', 'SourceCode']
        },
        
        insertImageSettings: {
            saveUrl: hostUrl + 'api/RichTextEditor/SaveFile',
            removeUrl: hostUrl + 'api/RichTextEditor/DeleteFile',
            path: hostUrl + 'RichTextEditor/'
        },
       
        showCharCount: true,
        enableTabKey: true,
        placeholder: 'Type something or use @ to tag a user...',
        
    });
    editor.appendTo('#defaultRTE');

    