declare module 'jspdf-autotable' {
    import { jsPDF } from 'jspdf';

    interface AutoTableOptions {
        head?: any[][];
        body: any[][];
        // Add other options as needed
    }

    function autoTable(doc: jsPDF, options: AutoTableOptions): void;

    export default autoTable;
}