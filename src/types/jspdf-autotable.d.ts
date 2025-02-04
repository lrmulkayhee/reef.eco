declare module 'jspdf-autotable' {
    interface AutoTableOptions {
        head?: any[];
        body: any[];
        foot?: any[];
        theme?: 'striped' | 'grid' | 'plain';
        styles?: any;
        headStyles?: any;
        bodyStyles?: any;
        footStyles?: any;
        alternateRowStyles?: any;
        columnStyles?: any;
        startY?: number;
        margin?: { top: number; right: number; bottom: number; left: number };
        pageBreak?: 'auto' | 'avoid' | 'always';
        tableWidth?: 'auto' | 'wrap' | number;
        showHead?: 'everyPage' | 'firstPage' | 'never';
        showFoot?: 'everyPage' | 'lastPage' | 'never';
        tableLineWidth?: number;
        tableLineColor?: string | number[];
        horizontalPageBreak?: boolean;
    }

    function autoTable(doc: any, options: AutoTableOptions): void;

    export default autoTable;
}