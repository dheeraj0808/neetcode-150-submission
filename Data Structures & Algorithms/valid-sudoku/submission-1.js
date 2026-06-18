class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const seen = new Set();

        for(let r=0;r<9;r++){
            for(let c=0;c<9;c++){
                const num = board[r][c];

                if(num==='.') continue;

                const boxRow = Math.floor(r/3);
                const boxCol = Math.floor(c/3);

                const rowTag = `row-${r}-${num}`;
                const colTag = `col-${c}-${num}`;
                const boxTag = `box-${boxRow}-${boxCol}-${num}`;

                if(seen.has(rowTag)|| seen.has(colTag)|| seen.has(boxTag)){
                    return false;
                }
                seen.add(rowTag);
                seen.add(colTag);
                seen.add(boxTag);

            }

        }
        return true;
    }
}
