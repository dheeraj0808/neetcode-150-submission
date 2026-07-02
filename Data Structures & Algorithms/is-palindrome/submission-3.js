class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l=0;
        let r=s.length-1;

        const isAlphanumeric =(char)=>{
            return /^[a-z0-9]$/i.test(char);
        };
        while(l<r){
            while(l<r && !isAlphanumeric(s[l])){
                l++;
            }

            while(l<r && !isAlphanumeric (s[r])){
                r--;
            }
            if(s[l].toLowerCase() !==s[r].toLowerCase()){
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
