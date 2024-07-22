var isSubtree = function(root, subRoot) {
    let flag  

    if (root == null && subRoot == null) { 
        return flag = true
    }

    if (root == null || subRoot == null) { 
        return flag = false
    }

    if (root.val == subRoot.val) {
        flag = isSubtree(root.left, subRoot.left) && isSubtree(root.right, subRoot.right)
    } else {
        flag = isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
    }

    return flag
};