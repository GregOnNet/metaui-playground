import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  Inject,
  Input,
  Optional,
  Self
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MAT_INPUT_VALUE_ACCESSOR } from '@angular/material/input';
import { Subject } from 'rxjs';

@Component({
  selector: 'mp-img',
  template: `
    <img [src]="url" [attr.alt]="alt" />
  `,
  styleUrls: ['./image.component.scss'],
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: forwardRef(() => ImageComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent
  implements MatFormFieldControl<any>, ControlValueAccessor {
  @Input()
  url: string = '';

  @Input()
  alt: string = '';

  readonly stateChanges = new Subject<void>();

  onChange = (_: any) => {};
  onTouched = () => {};

  autofilled: boolean = false;
  disabled: boolean = false;
  focused: boolean = false;
  id: string = 'img';
  placeholder: string = '';
  required: boolean = false;
  value: any | null;

  constructor(
    private _cd: ChangeDetectorRef,
    @Optional() @Self() public ngControl: NgControl,
    @Optional()
    @Self()
    @Inject(MAT_INPUT_VALUE_ACCESSOR)
    private inputValueAccessor: any
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  get empty(): boolean {
    return false;
  }

  get errorState(): boolean {
    return false;
  }

  get shouldLabelFloat(): boolean {
    return true;
  }

  get controlType(): string {
    return 'mp-img';
  }

  onContainerClick(event: MouseEvent): void {}

  setDescribedByIds(ids: string[]): void {}

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {}

  writeValue(value: any): void {}
}
