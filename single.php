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

      <nav id="single-close" class="single-nav">
        <a href="<?php echo home_url(); ?>">&#10005;</a>
      </nav>
      <nav id="single-next" class="single-nav">
        <a href="<?php echo home_url(); ?>">&rarr;</a>
      </nav>
      <nav id="single-prev" class="single-nav">
        <a href="<?php echo home_url(); ?>">&larr;</a>
      </nav>

      <div class="js-slick-container slider">
        <?php echo do_shortcode($gallery) ?>
      </div>
      <div class="slider-text">
        <?php the_title(); ?>
        <span class="caption font-italic"></span>
        <span id="slick-current-index">1</span> of <span id="slick-length"></span>
        <span class="arrow-prev"></span> | <span class="arrow-next"></span>
      </div>

      <section id="single-copy" class="container">
        <div class="row">
          <div class="col col6">
	          <?php the_content(); ?>
          </div>
        </div>
      </section>

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