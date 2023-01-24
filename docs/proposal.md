
# Metadata Migration Proposal

Some of the recommended methods for moving our metadata off of drupal and into 

## Migration Plan 1 (Preferred):

We would migrate data into our custom JSON based metadata schema, edited to be more verbose, and more compatible with pbCore. Most metadata fields should come over in some way with minor modification.

**CCTV Drupal metadata → CCTV Custom Metadata in ArangoDB/MongoDB → Final Location(Localeyz, etc)**

Another aspect of this proposal would be to put a no/low development front end on this database to allow for easy editing of individual programs before migration. This frontend could be similar to the directus platform localeyz is moving to although not built for frontend display of data.

Pros:
* Reduces the possibility of unintended loss of metadata (trying to move our metadata into strict pbcore or localeyz formats would result in some amount of lost data)
* Would make our metadata clearer by allowing us to specifically describe how our metadata has been, and is intended to be used
* With a mostly pre built/off the shelf frontend we wouldn’t spend time maintaining this software
* Would provide a better base for moving to a number of different platforms, including in house/contracted
* Would be more compatible/easy to migrate to localeyzes more JSON based APIs
* Allows us to edit

Cons:
* more time/effort to implement
* Would still have to be converted to another metadat format if we aren’t in control of our final format


[Metadata Schema](https://raw.githubusercontent.com/cctv-vt/cctv-metadata/master/cctv-program-schema.json?token=GHSAT0AAAAAABS7EYA3VAVT6ALDQKKJKIMUYSCAQJA)


## Migration Plan 3:

Migrate our metadata to pbCore xml documents

**CCTV Drupal metadata → pbCore xml files → Final Location(Localeyz, etc)**

Pros:
* pbCore format is a well developed standard

Cons:
* pbCore format does not match our metadata perfectly
* this would be a lot of xml documents

## Migration Plan 4:

Keep our data exclusively in drupal and migrate directly to the final location with a script.

**CCTV Drupal metadata → Final Location(Localeyz, etc)**

Pros:
* Least development time
* Easiest to implement

Cons:
* All metadata has to be modified programmatically and uniformly, with more opportunities for error/having to repeat the process multiple times to spot check