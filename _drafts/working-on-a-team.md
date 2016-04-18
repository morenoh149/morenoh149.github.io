Tips for working in a software team

* minimize the number of times you ask co worker's questions
	* every interruption results in a loss of productivity due to the context switches required in the mind.
But junior devs (and new hires) need to speak with team members more familiar with the codebase and problem domain, as
verbal communication is much more efficient at identifing pain points and confusion.
* strive to make code self-documenting, clear and searchable.
	* once we had a regex /patient/ that would pick up routing to actions like 'set-patient'. Problem arised later when trying to
figure out where requests to 'set-patient' would be caught. A search through the codebase resulted in only a single instance of
this string. Making the code completely un-understandable. We subsequently swapped the regex for a string comparison `action === 'set-patient'`
which any future developer could find where the match is picked up.
	* stay away from regexes ;-)
* comment your code. At least One comment per file. Forces you to describe things that are non obvious, do not describe the very obvious -
rewording the name of the class (PatientModal, is a modal for a patient). Instead PatientModal - recieves data from teh foo controller and
delegates input validation to the Bar component.
