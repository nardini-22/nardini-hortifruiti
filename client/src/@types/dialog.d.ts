export interface SimpleDialogProps {
  open: boolean;
  selectedValue: OverridableComponent<TypographyTypeMap<{}, "span">>;
  onClose: () => void;
}
