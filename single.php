<?php
get_header();
?>

<?php
if( have_posts() ) {
  while( have_posts() ) {
    the_post();
    //$get_gallery = get_post_meta( $post->ID, '_igv_gallery', true );
    //$gallery = do_shortcode( $get_gallery );
?>

    <article <?php post_class('viewer'); ?> id="post-<?php the_ID(); ?>">

      <?php // gallery ?>

	    <?php the_content(); ?>

    </article>

<?php
  }
} else {
?>
    <article class="u-alert"><?php _e('Sorry, no posts matched your criteria :{'); ?></article>
<?php
} ?>

<?php
get_footer();
?>