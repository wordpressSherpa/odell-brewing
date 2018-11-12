<?

$post_type = $_GET['post_type'];

/*
function mySearchFilter($query) {
	$post_type = $_GET['type'];
	if (!$post_type) {
		$post_type = 'any';
	}
    if ($query->is_search) {
        $query->set('post_type', $post_type);
    };
    return $query;
};

add_filter('pre_get_posts','mySearchFilter');
*/


if ($post_type == 'beer') { 
	include('search/search-beer.php'); 
}
else { 
	include('search/search-default.php'); 
};

?>