<?php
get_header();
?>

<?php
if( have_posts() ) {
  while( have_posts() ) {
    the_post();
    $gallery = get_post_meta( $post->ID, '_igv_gallery', true );
?>

    <article <?php post_class('viewer'); ?> id="post-<?php the_ID(); ?>">

      <div class="js-slick-container slider">
        <?php echo do_shortcode($gallery) ?>
      </div>
      <div class="slider-text">
        <?php the_title(); ?>
        <span class="caption font-italic"></span>
        <span class="arrow-prev"></span> | <span class="arrow-next"></span>
      </div>

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