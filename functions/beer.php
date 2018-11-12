<?php 
/*
 * Beer Functions
 */
 
function display_beer_type() {
	
	$field_key = "field_5521a0553b27b";
	$field = get_field_object($field_key);						

	if($field) {
		echo '<select name="' . $field['key'] . '" id="type">';
		foreach( $field['choices'] as $k => $v ) {
			echo '<option value="' . $k . '">' . $v . '</option>';
		}
		echo '</select>';
	} 
	
}

function display_beer_color() {
	
	$field_key = "field_5521a0a4fddb8";
	$field = get_field_object($field_key);						

	if($field) {
		echo '<select name="' . $field['key'] . '" id="color">';
		foreach( $field['choices'] as $k => $v ) {
			echo '<option value="' . $k . '">' . $v . '</option>';
		}
		echo '</select>';
	} 
	
}

function display_beer_ibu() {
	
	$field_key = "field_5521a13a94f34";
	$field = get_field_object($field_key);						

	if($field) {
		echo '<select name="' . $field['key'] . '" id="ibu">';
		foreach( $field['choices'] as $k => $v ) {
			echo '<option value="' . $k . '">' . $v . '</option>';
		}
		echo '</select>';
	} 
	
}

function display_beer_abv() {
	
	$field_key = "field_5521a167d0f3a";
	$field = get_field_object($field_key);						

	if($field) {
		echo '<select name="' . $field['key'] . '" id="abv">';
		foreach( $field['choices'] as $k => $v ) {
			echo '<option value="' . $k . '">' . $v . '</option>';
		}
		echo '</select>';
	} 
	
}

function display_beer_filters() {
	
	$field_key = "field_552560826f852";
	$field = get_field_object($field_key);						

	
	if($field) {
		echo '<ul id="beer-season-filter">';
		//echo '<select name="' . $field['key'] . '" id="abv">';
		foreach( $field['choices'] as $k => $v ) {
			//echo '<option value="' . $k . '">' . $v . '</option>';
			echo '<li><a href="#" id="'.$k.'">'.$v.'</a></li>';
		}
		//echo '</select>';
		echo '</ul>';
	} 
	
	
}