function updateIndex(index, item) {
    const items = encodeURIComponent(JSON.stringify(item));
    window.location.href = `/update?index=${index}&item=${items}`;
}

function deleteItem(index) {
    fetch(`/delete/${index}`, {
            method: 'delete'
        })
        .then(response => {
            if (response.ok) {
                console.log('Item deleted successfully');
                window.location.href = '/';
                // Optionally, you can redirect to another page or perform other actions
            } else {
                console.error('Failed to delete item');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}