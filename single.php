<?php
get_header();
?>

<!-- main content -->

<main id="main-content" class="container">

  <!-- main posts loop -->
  <section id="posts" class="row">

<?php
if( have_posts() ) {
  while( have_posts() ) {
    the_post();
?>

    <article <?php post_class('col col12'); ?> id="post-<?php the_ID(); ?>">

      <a href="<?php the_permalink() ?>"><?php the_title(); ?></a>

      <div class="js-slick-container">

	  	<?php // echo .js-slick-item ?> 

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

  <!-- end posts -->
  </section>

<!-- end main-content -->

</main>

<?php
get_footer();
?>